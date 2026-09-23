export interface BuildSummary {
    runId: string;
    tests: Record<string, string>;
}

export interface FlakyResult {
    counts: { flaky: number; failing: number; total: number };
    flaky: string[];
    summary?: string;
}

export async function analyzeFlaky(
    previous: BuildSummary,
    current: BuildSummary,
    _hasApiKey: boolean,
): Promise<FlakyResult> {
    const names = new Set([...Object.keys(previous.tests), ...Object.keys(current.tests)]);
    const flaky = [...names].filter(
        (name) => previous.tests[name] && current.tests[name] && previous.tests[name] !== current.tests[name],
    );
    const failing = Object.values(current.tests).filter(
        (status) => status === 'failed' || status === 'timedOut',
    ).length;
    return {
        counts: { flaky: flaky.length, failing, total: names.size },
        flaky,
    };
}