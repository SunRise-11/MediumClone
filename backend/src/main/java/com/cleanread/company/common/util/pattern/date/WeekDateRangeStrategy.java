package com.cleanread.company.common.util.pattern.date;

import com.cleanread.company.common.util.DateUtil;

/**
 * @project: backend
 */
public class WeekDateRangeStrategy implements Range {
    @Override
    public DateRange getDateRange() {
        return new DateRange(DateUtil.getBeginWeek(), DateUtil.getEndWeek());
    }
}
