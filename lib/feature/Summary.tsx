import { FC } from 'react';
import { SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { TransactionType } from '../../pages/api/types/TransactionType';
import { TransactionCategory } from '../../pages/api/types/TransactionCategory';
import FormattedDate from '../ui/FormattedDate';
import { MonthSelector } from './MonthSelector';
import { TypeStat } from './stat/TypeStat';
import { CategoryStat } from './stat/CategoryStat';
import { GroceriesStat } from './stat/GroceriesStat';
import { AlcoholStat } from './stat/AlcoholStat';
import { FastFoodStat } from './stat/FastFoodStat';

export const Summary: FC = () => {
  const todayDate = new Date();

  return (
    <VStack w="full" h="full" p={10} spacing={10}>
      <Text as="b">
        <FormattedDate date={todayDate} includeYear />
      </Text>
      <MonthSelector />

      <SimpleGrid columns={{ sm: 2, md: 3, lg: 3 }} spacing={10}>
        <TypeStat label="Credit" type={TransactionType.Credit} />
        <TypeStat label="Debit Orders" type={TransactionType.StandingOrder} />
        <TypeStat label="Payments" type={TransactionType.Payment} />
      </SimpleGrid>

      <Text as="b" margin="0">
        Grouped categories
      </Text>
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={10}>
        <GroceriesStat />
        <AlcoholStat />
        <FastFoodStat />
      </SimpleGrid>

      <Text as="b">High level categories</Text>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 5, xl: 7 }} spacing={10}>
        <CategoryStat label="Food" category={TransactionCategory.Food} />
        <CategoryStat label="Health" category={TransactionCategory.Health} />
        <CategoryStat
          label="Utilities"
          category={TransactionCategory.Utilities}
        />
        <CategoryStat
          label="Transport"
          category={TransactionCategory.Transport}
        />
        <CategoryStat
          label="Lifestyle"
          category={TransactionCategory.Lifestyle}
        />
        <CategoryStat
          label="Household"
          category={TransactionCategory.Household}
        />
        <CategoryStat
          label="Professional Fees"
          category={TransactionCategory.ProfessionalFees}
        />
      </SimpleGrid>
    </VStack>
  );
};
