package com.cleanread.company.common.util.pattern.order;

/**
 * @project: backend
 */
public interface OrderServiceFactory {
    OrderService createOrderService(String type, Long tagId);
}
