package com.cleanread.company.common.util.pattern.date;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * @project: backend
 */
@Data
@NoArgsConstructor
public class DateRange {
    private Date start;
    private Date end;

    public DateRange(Date start, Date end) {
        this.setEnd(end);
        this.setStart(start);
    }
}
