import React from 'react';
import Header from "@/components/partials/header/header"
import Hero from "@/components/partials/hero/hero";
import Number from "@/components/partials/number/number";
import Cost from "@/components/partials/cost/cost";
import Risk from "@/components/partials/risks/risk";
import Doctors from "@/components/partials/doctors/doctors";
import CostDepends from "@/components/partials/costdepends/costdepends";
import InsurenceAdvisor from "@/components/partials/insurenceadvisor/insurenceadvisor";
import Why from "@/components/partials/why/why";
import Google from "@/components/partials/google/google";
import Info from "@/components/partials/info/info";
import CtaBanner from "@/components/partials/ctabanner/ctabanner";
import FAQ from "@/components/partials/faq/faq";
import Form from "@/components/partials/form/from";

export default function NewDesign() {
  return (

    <div className="w-full max-w-[1500px] mx-auto px-4 py-8">
      <Header />

      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">

        {/* LEFT SIDE 70% */}
        <div className="space-y-10">
          <Hero />
          <Number />
          <Cost />
          <Risk />
          <Doctors />
          <CostDepends />
          <InsurenceAdvisor />
          <Why />
          <Google />
          <Info />
          <CtaBanner />
          <FAQ />
        </div>

        {/* RIGHT SIDE 30% (Sticky Form) */}
        <div className="relative">
          <div className="sticky top-24">
            <Form />
          </div>
        </div>

      </div>
    </div>
  );
}
