package com.cleanread.company.common.util.pattern.date;

/**
 * @project: backend
 * @author: Sarvar55
 */
public class AllDateRangeStrategy implements Range {
    @Override
    public DateRange getDateRange() {
        return new DateRange(null, null);
    }
}
