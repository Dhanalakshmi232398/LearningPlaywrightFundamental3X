export interface HealReport {
    failedSelector: string;
    intent: string;
    unavailableReason?: string;
    verified: { selector: string; strategy: string; matchCount: number; visible: boolean; reasoning: string }[];
    rejected: { selector: string; reason: string }[];
}