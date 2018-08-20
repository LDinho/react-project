import React from 'react';
import Features from '../components/features';
import HowTo from '../components/how-to';
import Travels from '../components/how-to-travel';
import Subscription from '../components/subscription';
import Header from '../components/header';
import Footer from '../components/footer';


const IndexPage = () =>
  (<main>
    <Header />
    <Features />
    <HowTo />
    <Travels />
    <Subscription />
    <Footer />
  </main>);

export default IndexPage;
