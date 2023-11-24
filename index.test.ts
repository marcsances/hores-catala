import toCatalanDate from "./index";

const cases = [
    [new Date(2023, 11, 24, 12, 0, 0, 0),  "les dotze en punt"],
    [new Date(2023, 11, 24, 12, 0, 20, 0),  "les dotze en punt"],
    [new Date(2023, 11, 24, 13, 0, 0, 0),  "la una en punt"],
    [new Date(2023, 11, 24, 14, 0, 0, 0),  "les dues en punt"],
    [new Date(2023, 11, 24, 13, 15, 0, 0),  "un quart de dues"],
    [new Date(2023, 11, 24, 13, 30, 0, 0),  "dos quarts de dues"],
    [new Date(2023, 11, 24, 13, 45, 0, 0),  "tres quarts de dues"],
    [new Date(2023, 11, 24, 12, 1, 0, 0),  "les dotze tocades"],
    [new Date(2023, 11, 24, 12, 2, 0, 0),  "les dotze tocades"],
    [new Date(2023, 11, 24, 12, 3, 0, 0),  "les dotze tocades"],
    [new Date(2023, 11, 24, 12, 4, 0, 0),  "les dotze tocades"],
    [new Date(2023, 11, 24, 12, 5, 0, 0),  "les dotze ben tocades"],
    [new Date(2023, 11, 24, 12, 6, 0, 0),  "les dotze ben tocades"],
    [new Date(2023, 11, 24, 12, 7, 0, 0),  "les dotze ben tocades"],
    [new Date(2023, 11, 24, 12, 7, 30, 0),  "mig quart d'una"],
    [new Date(2023, 11, 24, 12, 8, 0, 0),  "mig quart d'una"],
    [new Date(2023, 11, 24, 12, 9, 0, 0),  "mig quart d'una"],
    [new Date(2023, 11, 24, 12, 10, 0, 0),  "mig quart tocat d'una"],
    [new Date(2023, 11, 24, 12, 11, 0, 0),  "mig quart ben tocat d'una"],
    [new Date(2023, 11, 24, 12, 12, 0, 0),  "mig quart ben tocat d'una"],
    [new Date(2023, 11, 24, 12, 14, 30, 0),  "mig quart ben tocat d'una"],
    [new Date(2023, 11, 24, 12, 15, 0, 0),  "un quart d'una"],
    [new Date(2023, 11, 24, 12, 30, 0, 0),  "dos quarts d'una"],
    [new Date(2023, 11, 24, 12, 45, 0, 0),  "tres quarts d'una"],
    [new Date(2023, 11, 24, 11, 30, 0, 0),  "dos quarts de dotze"],
    [new Date(2023, 11, 24, 17, 22, 30, 0),  "un quart i mig de sis"],
    [new Date(2023, 11, 24, 17, 27, 0, 0),  "un quart i mig ben tocat de sis"],
    [new Date(2023, 11, 24, 13, 26, 0, 0),  "un quart i mig ben tocat de dues"],
]

test.each(cases)(
    "%p time is rendered as %p",
    (...args) => {
        const date: Date = args[0] as unknown as Date;
        const expected: string = args[1] as unknown as string;
        expect(toCatalanDate(date)).toBe(expected);
    }
)
