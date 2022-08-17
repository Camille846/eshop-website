import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img alt="" className="home__img" />
            
                <div className="home__row">
                    <Product 
                        id='product01'
                        title="Matte Liquid Lipstick, Cheeky, Rose Nude, 0.1400 oz"
                        price={9.98}
                        image="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        rating={5}
                    />
                    <Product 
                        id='product02'
                        title='Makeup Brushes Premium Synthetic Set 18 Pcs Makeup Kit, Brush Eyeshadows'
                        price={12.99}
                        rating={4}
                        image="https://images.unsplash.com/photo-1535415493710-bdf0b2dc725e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    />
                    <Product 
                        id='product03'
                        title="Shine ProStay Primer and Gloss, Base Coat, Top Coat, 0.5 fl oz "
                        price={14.99}
                        rating={5}
                        image="https://images.unsplash.com/photo-1598104358204-87cefc7c5986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=909&q=80"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id='product04'
                        title="Organic Honey Oils, body and facial skin cream Kit "
                        price={39.99}
                        rating={4}
                        image="https://images.unsplash.com/photo-1570723968319-d8db6a35dbeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    />
                    <Product 
                        id='product04'
                        title="Ginger White Eau de Toillete Perfume 50ml 1.69FL.OZ"
                        price={59.99}
                        rating={4}
                        image="https://images.unsplash.com/photo-1606334585230-3ba76447cdbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=563&q=80"
                    />
                    <Product 
                        id='product06'
                        title="Bee Naturalles 'enclosing nature' Kit Face and Body Cream"
                        price={32.99}
                        rating={4}
                        image="https://images.unsplash.com/photo-1570723968283-109ba8d6dda9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    />
                </div>
                <div className="home__row">
                    <Product 
                       id='product06'
                       title="Bee Naturalles 'enclosing nature' Kit Lavender & Tamanu oil"
                       price={32.99}
                       rating={4}
                       image="https://images.unsplash.com/photo-1570723968307-49834ffa3cce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                       />
                    <Product 
                        id='product08'
                        title="Bee Naturalles Organic Bee Idea enclosing nature in a jar"
                        price={21.99}
                        rating={3}
                        image="https://images.unsplash.com/photo-1570723811540-0f4d1836ef58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        />
                    <Product 
                        id='product05'
                        title="Bee Naturalles 'enclosing nature' Essential Oils Kit"
                        price={39.77}
                        rating={4}
                        image="https://images.unsplash.com/photo-1570723968383-37b528a70009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;