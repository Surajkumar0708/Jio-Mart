import { Link } from 'react-router-dom';
import styles from './Groceries.module.scss';
import { Card, Collapse } from 'antd';
import Meta from 'antd/es/card/Meta';
import { banner, categories, products } from '../../common/groceries';

const Groceries = () => {
    const { Panel } = Collapse;
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.breadcrumb}>
                    <Link to="/">Home</Link> &gt;
                    <Link to="/groceries">All Categories</Link> &gt;
                    Groceries
                </div>
                <div className={styles.categoryList}>
                    <Collapse>
                        <h2>Category</h2>
                        {categories.map((category, index) => (
                            <Panel className={styles.selectContent} header={category} key={index}>
                                <p >{category}</p>
                            </Panel>
                        ))}
                    </Collapse>
                </div>
            </div>
            <div>
                <div className={styles.banner}>
                    {banner.map((bannerImg) => (
                        <img src={bannerImg.image} alt="Groceries Banner" />
                    ))}
                </div>
                <div className={styles.content}>
                    <div className={styles.products}>
                        <h2>Groceries</h2>
                        <div className={styles.productGrid}>
                            {products.map((product) => (
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={product.image} />}
                                >
                                    <Meta title={product.name} description={`${product.price}`} />
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Groceries;
