import { FunctionComponent } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { LayoutProps } from './Layout.props';
import Sidebar from './Sidebar/Sidebar';

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};

export default withLayout;
