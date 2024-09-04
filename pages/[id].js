// import { useRouter } from "next/router";
// import Header from "@/components/Header/Header";
// import styled from "styled-components";
// import { StyledPriority } from "@/components/StyledPriority";
// import { StyledTaskFlexWrapper } from "@/components/StyledTaskFlexWrapper";
// import { StyledDate } from "@/components/StyledDate";
// import Link from "next/link";
// import Modal from "@/components/Modal/Modal";
// import { useState } from "react";
// import { StyledMarkCompleted } from "@/components/StyledMarkCompleted";
// import { StyledTaskWrapperTop } from "@/components/StyledTaskWrapperTop";

// const StyledDetailsPage = styled.section`
//   border: 1px solid #000000;
//   padding: 1rem;
//   margin: 0.5rem;
// `;

// const StyledDescription = styled.aside`
//   border: 1px solid black;
//   padding: 1rem;
//   margin: 0.5rem;
// `;

// const StyledBackLink = styled(Link)`
//   border: 1px solid black;
//   padding: 1rem;
//   margin: 0.5rem;
//   border-radius: 50%;
//   background: grey;
//   text-decoration: none;
//   color: white;
// `;

export default function DetailsPage({}) {
  if (!currentTask) {
    return <p>Task not found</p>;
  }

  return (
    <>
      <Header />
    </>
  );
}
