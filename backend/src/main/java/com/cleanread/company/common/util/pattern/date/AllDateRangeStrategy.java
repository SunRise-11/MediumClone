package com.cleanread.company.common.util.pattern.date;

/**
 * @project: backend
 */
public class AllDateRangeStrategy implements Range {
    @Override
    public DateRange getDateRange() {
        return new DateRange(null, null);
    }
}
