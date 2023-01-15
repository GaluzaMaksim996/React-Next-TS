import { FunctionComponent } from 'react';
import { LayoutProps } from './Layout.props';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import styles from './Layout.module.css';
import { AppContextProvider, IAppContext } from '@/context/app.context';

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.body}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};

const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T) {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};

export default withLayout;
