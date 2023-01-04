import React from "react";
import FaqCard from "./component";
import { FaqQuestions } from "./mockData";
import { FaqContainer } from "./style";

function FaqPage() {
  return (
    <FaqContainer>
      <div>
        <h1 className="faqTitle">FAQ</h1>
        {FaqQuestions.map((itemQues) => (
          <div key={itemQues.id} className="faqCard">
            <FaqCard detail={itemQues} />
          </div>
        ))}
      </div>
    </FaqContainer>
  );
}

export default FaqPage;
