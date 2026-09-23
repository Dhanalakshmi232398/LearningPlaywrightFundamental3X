export interface RcaVerdict {
    severity: string;
    priority: string;
    rootCause: string;
    fixes: string[];
}

export interface FailureInput {
    title: string;
    file: string;
    error: string;
    stack?: string;
}

export async function analyzeFailure(_input: FailureInput): Promise<RcaVerdict> {
    return {
        severity: 'unknown',
        priority: 'unassigned',
        rootCause: 'No RCA provider is configured.',
        fixes: [],
    };
}