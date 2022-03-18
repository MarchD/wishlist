import React, { useMemo } from 'react';
import Container from '../../components/layout/container/Container';
import AccordionList from '../../components/common/accordion/accordion-list/AccordionList';
import { wishes } from '../../mocked-data/wishes';
import WishList from '../../components/wish/WishList';

function UserWishlists() {
  const accordionList = useMemo(
    () => [
      {
        id: 1,
        title: 'Список 1',
        component: <WishList wishes={wishes[0].list} />,
      },
      {
        id: 2,
        title: 'Список 2',
        component: <WishList wishes={wishes[1].list} />,
      },
      {
        id: 3,
        title: 'Список 3',
        component: <WishList wishes={wishes[2].list} />,
      },
      {
        id: 4,
        title: 'Список 3',
        component: <WishList wishes={wishes[2].list} />,
      },
    ],
    []
  );

  return (
    <Container size="lg">
      <AccordionList accordions={accordionList} />
    </Container>
  );
}

export default UserWishlists;
