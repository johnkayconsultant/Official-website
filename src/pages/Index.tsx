import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BlogPreview from '@/components/BlogPreview';
import Footer from '@/components/Footer';
import ServicesPreview from '@/components/ServicesPreview';
import AccuracyPreview from '@/components/AccuracyPreview';
import WhatsAppButton from '@/components/WhatsaAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#ffffff]">
        <Header/>
        <main>
            <HeroSection/>
            <ServicesPreview/>
            <BlogPreview/>
            <AccuracyPreview/>
        </main>
        <Footer/>
        <WhatsAppButton/>

    </div>
  )
}

export default Index;