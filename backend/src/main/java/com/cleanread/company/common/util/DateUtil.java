package com.cleanread.company.common.util;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.temporal.TemporalAdjuster;
import java.time.temporal.TemporalAdjusters;
import java.util.Date;

/**
 * @project: backend
 * @author: Sarvar55
 */
public class DateUtil {
    private static LocalDateTime localDateTime = LocalDateTime.now();

    public static Date getBeginWeek() {
        return getDateWithStart(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY));
    }

    public static Date getEndWeek() {
        return getDateWithEnd(TemporalAdjusters.nextOrSame(DayOfWeek.SUNDAY));
    }

    public static Date getBeginMonth() {
        return getDateWithStart(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY));
    }

    public static Date getEndMonth() {
        return getDateWithEnd(TemporalAdjusters.lastDayOfMonth());
    }


    public static Date getBeginYear() {
        return getDateWithStart(TemporalAdjusters.firstDayOfYear());
    }

    public static Date getEndYear() {
        return getDateWithEnd(TemporalAdjusters.lastDayOfYear());
    }

    private static Date getDateWithStart(TemporalAdjuster adjuster) {
        LocalDateTime today = getLocalDateTimeInstance();
        return asDate(today.with(adjuster).withHour(0).withMinute(0).withSecond(0).withNano(0));
    }

    private static Date getDateWithEnd(TemporalAdjuster adjuster) {
        LocalDateTime today = getLocalDateTimeInstance();
        return asDate(today.with(adjuster).withHour(23).withMinute(59).withSecond(59).withNano(999999999));
    }

    private static synchronized LocalDateTime getLocalDateTimeInstance() {
        return localDateTime == null ? LocalDateTime.now() : localDateTime;
    }

    private static Date asDate(LocalDateTime localDateTime) {
        return Date.from(localDateTime.atZone(java.time.ZoneId.systemDefault()).toInstant());
    }
}
