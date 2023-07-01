package com.cleanread.company.common.mapper;

import org.modelmapper.ModelMapper;

/**
 * @project: backend
 * @author: Sarvar55
 */
public interface ConverterService {

    ModelMapper forRequest();

    ModelMapper forResponse();

}
