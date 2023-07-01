package com.cleanread.company.common.mapper;

import lombok.AllArgsConstructor;
import org.hibernate.collection.spi.PersistentCollection;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Service;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Service
@AllArgsConstructor
public class ConverterManager implements ConverterService {
    private final ModelMapper mapper;

    /*
     * Hibernate, ilişkili verileri tembel yükleme (lazy loading) stratejisiyle getirirken PersistentCollection kullanır.
     * Koşul, mappingContext.getSource() ile elde edilen kaynak nesnesinin PersistentCollection olmaması durumunda geçerli olur. Yani,
     *  PersistentCollection tipine ait bir nesne ile karşılaşılırsa, o özelliği atlar ve işlemi devam ettirir.
     * */

    @Override
    public ModelMapper forRequest() {// source-> A B C dest->A B C D E

        mapper.getConfiguration()//yani bu şekilde lazy olan entitiler yuklenmeye çalışılmaz
                .setPropertyCondition(mappingContext -> !(mappingContext.getSource() instanceof PersistentCollection))
                .setAmbiguityIgnored(true)
                .setMatchingStrategy(MatchingStrategies.STANDARD);

        return mapper;
    }

    @Override
    public ModelMapper forResponse() {// source-> A B C D E dest-> A B C
        mapper.getConfiguration()
                .setPropertyCondition(mappingContext -> !(mappingContext.getSource() instanceof PersistentCollection))
                .setAmbiguityIgnored(true)
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return mapper;
    }
}
