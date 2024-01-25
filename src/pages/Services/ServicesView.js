// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./ServicesStyles";
import { AppStyles, Images } from "../../theme";
import {
  WebHeader,
  WebFooter,
  ServiceBoxLeft,
  ServiceBoxRight,
} from "../../components";
import ServHeroSec from "./ServHeroSec";
import { Helmet } from "react-helmet";
import { ROUTES } from "../../constants";

export default function ServicesView(props) {
  return (
    <div>
      <Helmet>
        <title>Services | Health City</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <WebHeader />
      <ServHeroSec />
      <div style={{ margin: "50px 0" }}>
        <ServiceBoxLeft
          image={Images.free_discounted}
          icon={Images.therapist_icon}
          title="Free & Discounted Therapy"
          description={
            "At Health City, we take great pride in providing end-to-end solutions to our clients. People who are looking for free, low cost or discounted well-being and mental health service providers can find the right professional for their needs using our free and discounted therapy services. You can locate qualified counselors, cognitive-behavioral therapists, psychologists, fitness coaches, and other professionals, from your locality or around the world, who can guide you to improve the standard of your life. "
          }
          anchorText="Read More"
          link={ROUTES.FREE_THERAPY}
        />

        <ServiceBoxRight
          image={Images.premium_serv}
          icon={Images.laptop_icon}
          title="Premium Service"
          description={
            "Catering to the needs of our diverse clients, we also offer premium services that require clients to pay an additional amount for personalized therapy sessions designed to address their individual problems. The therapists under the premium services are consultant and director-level industry experts with experience of at least 20 years. We collaborate with the specialist Cognitive Behavioral Psychotherapists, Behavioral Couple Therapy Practitioners. and other accredited professionals from the industry for premium services."
          }
          anchorText="Read More"
          link={ROUTES.PREMIUM_SERVICE}
        />

        <ServiceBoxLeft
          image={Images.therapist_options}
          icon={Images.therapist_icon}
          title="A Range of Professionals Available"
          description={
            "No matter the issue, at Health City we have a diverse, experienced team of therapists and licensed psychologists that are trained to assess your situation and help you with a range of mental health challenges and behavioral disorders. We provide our clients 3 levels of professionals including a Trainee Psychologist, Qualified Psychologist, and Premium Service Therapist. You can choose the right expert for your needs and get a better understanding of yourself through a one-to-one, individual session of 50 minutes."
          }
        />

        <ServiceBoxRight
          image={Images.one_on_one}
          icon={Images.laptop_icon}
          title="Online & In-Person Sessions Available"
          description={
            "Health City offers you the option of conducting interactive online and face-to-face sessions. Our online and in-person sessions are designed to help you with your specific problems and guide you to improve your mood and mental health. With our online sessions, we enable our clients to get professional help no matter where they are in the world. The aim of offering this alternative is to create a more comfortable space for our clients where they can speak their minds freely and better cope with any emotional turmoil."
          }
        />

        <ServiceBoxLeft
          image={Images.written_reports}
          icon={Images.profit_report_icon}
          title="Detailed Written Report"
          description={
            "At Health City, we take our job very seriously and help you improve your mood and mental health and make your thoughts clearer using professional techniques and clinical psychology research. Our clients get the option to receive an informative report of 2 to 3 pages or a detailed report of 4 to 6 pages, highlighting their emotional and mental growth. This report gives you important information about your sessions and professional insights on your case and progress, which can be very helpful in future consultations."
          }
        />

        <ServiceBoxRight
          image={Images.treatment_confirmation}
          icon={Images.file_icon}
          title="Confirmation of Participation Letter"
          description={
            "Health City cares about giving you the most comfortable environment that helps you to share and also allows our therapists to sever you in the best way possible. The option of online and face-to-face sessions allow us to assist our clients within their comfort zone, offer convenience and remote services and help them cope with any emotional and mental problems. That’s why, as an extension of our services, we offer our clients the option to receive a letter that confirms their participation in our session and therapy."
          }
        />

        <ServiceBoxLeft
          image={Images.twin_brain_icon}
          icon={Images.therapist_icon}
          title="Twin Brain"
          description={
            "At Health City, we take great pride in providing end-to-end solutions to our clients. People who are looking for free, low cost or discounted well-being and mental health service providers can find the right professional for their needs using our free and discounted therapy services. You can locate qualified counselors, cognitive-behavioral therapists, psychologists, fitness coaches, and other professionals, from your locality or around the world, who can guide you to improve the standard of your life. "
          }
          anchorText="Read More"
          link={ROUTES.TWIN_BRAIN}
        />

        <ServiceBoxRight
          image={Images.twin_brain_icon}
          icon={Images.laptop_icon}
          title="Resource Hub X"
          description={
            "Catering to the needs of our diverse clients, we also offer premium services that require clients to pay an additional amount for personalized therapy sessions designed to address their individual problems. The therapists under the premium services are consultant and director-level industry experts with experience of at least 20 years. We collaborate with the specialist Cognitive Behavioral Psychotherapists, Behavioral Couple Therapy Practitioners. and other accredited professionals from the industry for premium services."
          }
          anchorText="Read More"
          link={ROUTES.RESOURCE_HUB_X}
        />
      </div>
      <WebFooter />
    </div>
  );
}
