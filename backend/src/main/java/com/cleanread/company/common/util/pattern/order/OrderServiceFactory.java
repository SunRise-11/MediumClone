package com.cleanread.company.common.util.pattern.order;

/**
 * @project: backend
 * @author: Sarvar55
 */
public interface OrderServiceFactory {
    OrderService createOrderService(String type);
}
