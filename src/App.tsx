import { Layout } from "antd";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/ui/main";
import { Content } from "antd/es/layout/layout";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
      <Content>
        <Main />
      </Content>
      <Footer />
    </Layout>
    </Router>
  );
}

export default App;
