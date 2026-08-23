import OpenAI from "openai";

export const runtime = "nodejs";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type WamziMessage = {
  role: "user" | "assistant";
  content: string;
};

type WamziContext = {
  wallet?: {
    walletBalance?: number;
    usdtBalance?: number;
    roundUpBalance?: number;
    userCurrency?: string;
  };
  goals?: Array<{
    name?: string;
    amount?: number;
    target?: number;
    effectiveTarget?: number;
    goalType?: string;
    productName?: string;
    productCategory?: string;
    currentPrice?: number | null;
    originalPrice?: number | null;
    estimatedPrice?: number | null;
    hasPriceDrop?: boolean;
    isAffordable?: boolean;
  }>;
  portfolio?: Array<{
    name?: string;
    symbol?: string;
    amount?: number;
    totalValue?: number;
    profitLoss?: number;
  }>;
  transactions?: Array<{
    title?: string;
    amount?: number;
    date?: string;
  }>;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const message = String(body.message || "").trim();
    const history: WamziMessage[] = Array.isArray(body.history) ? body.history : [];
    const context: WamziContext = body.context || {};

    if (!message) {
      return Response.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return Response.json(
        { error: "OPENAI_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const safeHistory = history
      .slice(-10)
      .map((item) => ({
        role: item.role === "assistant" ? "assistant" : "user",
        content: String(item.content || "").slice(0, 1200),
      }))
      .filter((item) => item.content.length > 0);

    const appContext = JSON.stringify(context, null, 2).slice(0, 8000);

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      max_output_tokens: 300,
      input: [
        {
          role: "system",
          content: `
You are WAMZI, the AI financial coach inside Hassaleh.

Hassaleh is a round-up savings and crypto app. Users save spare change, convert round-ups into USDT, track crypto holdings, and create smart goals for money, products, and investments.

Your job:
- Help users save smarter.
- Help users understand spending behavior.
- Help users reach goals faster.
- Help users think carefully about crypto risk.
- Explain product goals, price drops, and affordability.
- Be direct, practical, and supportive.

Important rules:
- Do not promise investment returns.
- Do not predict coin prices.
- Do not tell users to buy a specific coin.
- Do not say WAMZI Coin is an investment.
- Position WAMZI Coin only as a future reward/utility token for healthy habits.
- Give educational guidance, not financial advice.
- Keep answers concise and useful.
          `.trim(),
        },
        {
          role: "user",
          content: `
Current Hassaleh app context:
${appContext}

Recent chat history:
${safeHistory.map((m) => `${m.role}: ${m.content}`).join("\n")}

User message:
${message}
          `.trim(),
        },
      ],
    });

    return Response.json({
      reply: response.output_text || "WAMZI could not generate a response right now.",
    });
  } catch (error) {
    console.error("WAMZI chat error:", error);

    return Response.json(
      { error: "WAMZI is unavailable right now." },
      { status: 500 }
    );
  }
}