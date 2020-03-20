interface Date {
    format: (arg?: string) => string;
    addDay: (arg?: number) => Date;
    getCurrMonthFirst: () => Date;
    getCurrMonthLast: () => Date;
    getCurrWeekFirst: () => Date;
    getCurrWeekLast: () => Date;
    getLastMonthFirst: () => Date;
    getLastMonthLast: () => Date;
    setWeekStartEnd: (start: number) => void;
}
declare let startWeek: number;