# 2025-05-27 Drew Checklist

## Intro 

This post takes you through [AI>] the process of creating a due diligence checklist for mergers and acquisitions (M&A) prospects, specifically small to medium-sized businesses (SMBs). The goal is to help both acquirers and targets quickly assess suitability for further discussions.

M&A is not actually the business that Drew wants to start, but has similar aspects — and, fingers crossed, let's no cats out of any bags.

See the my interaction with ChatGPT here:

https://chatgpt.com/share/68379b6a-cedc-8007-9811-109956e8709f


## My Prompt: First Draft

The goal is to help a company involved with mergers and acquisitions of small to medium-sized businesses identify prospects that are worth pursuing. 

The task is to produce a checklist of considerations that would help both parties identify whether the prospect is a suitable candidate. 

Considerations for the checklist:

* Covers all major aspects of running a successful modern small to medium-sized business. 
* Includes targets and metrics that can be used to evaluate the prospect.
* Is not too long, so that it can be used in a first pass to identify prospects that are worth pursuing.
* Prospects should also be able to look at the checklist and identify whether they are suitable candidates or not. 
* The checklist should be easy to understand and use, even for those who may not have a deep understanding of business operations.
* The checklist should be flexible enough to accommodate different types of businesses and industries.
* The checklist should be actionable, providing clear steps or questions that can be answered to assess suitability.
* The checklist should be structured in a way that allows for easy comparison between different prospects.

## chatGPT o3: Reply

Below is a ready-to-use prompt you can drop straight into ChatGPT (or any LLM) to generate the checklist you described. It already bakes in every requirement you listed, so the output arrives in a compact, side-by-side format that both acquirer and target can use for a quick “go / no-go” screen.

---

**Prompt Title (optional):** *Concise M\&A Prospect Checklist Generator*

**Prompt text:**

> **Role & Objective**
> You are an experienced mergers-and-acquisitions analyst.
> Create a concise **first-pass checklist** that an acquiring firm and a potential **small-to-medium-sized business (SMB)** target can both use to decide whether to proceed to deeper talks.
>
> **Checklist requirements**
>
> 1. **Breadth.** Cover every major area of a modern SMB:
>    • Strategy & Market Position
>    • Financial Health & Profitability
>    • Operations & Technology
>    • Customer & Revenue Profile
>    • Talent, Culture & Leadership
>    • Legal / Regulatory / Compliance
>    • ESG & Key Risks
>    • Integration Readiness
> 2. **Actionable metrics.** For each area give **2–4 simple, clear criteria or questions** plus **1–2 numeric targets/benchmarks** (e.g., “Revenue CAGR ≥ 10 % over 3 yrs”). Favor yes/no or single-number answers.
> 3. **Brevity.** Limit the whole checklist to **≈30 bullet points** so it fits on one page and can be filled out in **<10 minutes**.
> 4. **Dual-use wording.** Phrase every item so **either party** (buyer or seller) can score it quickly.
> 5. **Comparison-ready format.** Return the checklist as a **three-column table**:
>    • Column 1 = Domain
>    • Column 2 = Question / Criterion
>    • Column 3 = Target / Benchmark / Guidance
> 6. **Clarity & Flexibility.** Avoid heavy jargon; make it understandable to non-experts and adaptable across industries.
> 7. **Instructions & Scoring.** Precede the table with a one-paragraph “How to use & interpret scores” note (no more than 4 sentences).
> 8. **Output.** Provide **only** the instructions paragraph followed by the table—no extra commentary or explanations.

> **(Optional)** If the user supplies an industry name in the prompt (e.g., “software” or “manufacturing”), tailor relevant metrics (e.g., gross margin ranges) to that industry; otherwise give general benchmarks suitable for most SMBs.

---

**How to use it**

1. Paste everything from “Role & Objective” down into ChatGPT.
2. (Optional) Add a line like: *“Industry focus: commercial HVAC services.”*
3. Run the prompt—the model will return a crisp, one-page checklist ready for scoring and side-by-side comparison.

Feel free to tweak the domain list or numeric targets before you hit “send,” but this version should already satisfy all the criteria you outlined.

## Result

**How to use & interpret scores**
For each row, the buyer or seller marks “✓” if the target is met or writes the actual figure if numeric. Tally check-marks at the end: ≥ 70 % met = advance to due diligence; 50-69 % = discuss gaps; < 50 % = likely decline. Keep a copy for each prospect to enable side-by-side comparison.

| Domain                               | Question / Criterion                                       | Target / Benchmark / Guidance |
| ------------------------------------ | ---------------------------------------------------------- | ----------------------------- |
| **Strategy & Market Position**       | Holds ≥ 5 % share in defined niche                         | Yes / No                      |
|                                      | 3-year revenue CAGR                                        | ≥ 10 %                        |
|                                      | Unique value proposition clearly articulated               | Yes / No                      |
| **Financial Health & Profitability** | EBITDA margin                                              | ≥ 12 %                        |
|                                      | Net debt / EBITDA                                          | ≤ 3×                          |
|                                      | Cash conversion (operating CF / EBITDA)                    | ≥ 90 %                        |
|                                      | Past 3 years audited or reviewed financials                | Yes / No                      |
| **Operations & Technology**          | Core processes documented and repeatable                   | Yes / No                      |
|                                      | Modern ERP / key systems in place                          | Yes / No                      |
|                                      | CapEx as % of revenue (3-yr avg)                           | ≤ 6 %                         |
|                                      | Supply chain disruption incidents (past 2 yrs)             | ≤ 1 major                     |
| **Customer & Revenue Profile**       | Top customer concentration                                 | Top 1 < 20 % of revenue       |
|                                      | Recurring / contract revenue share                         | ≥ 40 %                        |
|                                      | Annual customer churn                                      | ≤ 10 %                        |
|                                      | Days sales outstanding (DSO)                               | ≤ 45 days                     |
| **Talent, Culture & Leadership**     | Founder / key execs committed ≥ 12 mos post-close          | Yes / No                      |
|                                      | Voluntary employee turnover (latest yr)                    | ≤ 15 %                        |
|                                      | Formal training budget per FTE                             | ≥ \$500                       |
| **Legal / Regulatory / Compliance**  | Outstanding or threatened litigation material?             | No                            |
|                                      | All required licenses & permits current                    | Yes / No                      |
|                                      | IP ownership clear and transferable                        | Yes / No                      |
| **ESG & Key Risks**                  | Reportable environmental or safety violations (past 3 yrs) | None                          |
|                                      | Lost-time injury rate vs. industry                         | ≤ industry median             |
|                                      | Documented cybersecurity policy & no major breaches        | Yes / No                      |
| **Integration Readiness**            | Cultural values survey shows > 70 % alignment              | Yes / No                      |
|                                      | IT systems compatible with acquirer stack                  | Yes / No                      |
|                                      | Synergy estimate vs. integration cost                      | ≥ 2×                          |
|                                      | Data room with complete diligence docs ready               | Yes / No                      |
