import Htag from '@/components/Htag/Htag';
import Tag from '@/components/Tag/Tag';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import HhData from '@/components/HhData/HhData';
import { TopLevelCategory } from '@/interfaces/page.interface';
import Advantages from '@/components/Advantages/Advantages';
import { useEffect, useReducer } from 'react';
import { sortReducer } from './sort.reducer';
import { SortEnum } from '@/components/Sort/Sort.props';
import Sort from '@/components/Sort/Sort';
import Product from '@/components/Product/Product';
import { useReducedMotion } from 'framer-motion';

const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps) => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });
  const shouldReduceMotion = useReducedMotion();

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>

      <div role="list">
        {products && products.map((p) => <Product role="listitem" layout={shouldReduceMotion ? false : true} key={p._id} product={p} />)}
      </div>

      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>

      {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}

      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">Преимущства</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}

      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}

      <Htag tag="h2">Получаемые навыки</Htag>

      {page.tags.map((t) => (
        <Tag key={t} color="primary">
          {t}
        </Tag>
      ))}
    </div>
  );
};

export default TopPageComponent;
