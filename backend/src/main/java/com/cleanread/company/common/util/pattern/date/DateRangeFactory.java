package com.cleanread.company.common.util.pattern.date;

/**
 * @project: backend
 */
public class DateRangeFactory {

    public static Range getDateRange(String date) {

        if (date.contains("week"))
            return new WeekDateRangeStrategy();
        else if (date.contains("month"))
            return new MonthDateRangeStrategy();
        else if (date.contains("year"))
            return new YearDateRangeStrategy();
        else
            return new AllDateRangeStrategy();

    }
}
