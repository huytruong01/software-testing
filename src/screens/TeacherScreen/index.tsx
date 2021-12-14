import { ListTeachers, Navbar } from "containers";
import { FormAddTeacher } from "containers/FormAddTeacher";
import React from "react";
import { Container } from "template/Container";

export default function TeacherScreen() {
  const [searchValueState, setSearchActiveState] = React.useState("");
  const [isOpenFormAdd, setIsOpenForm] = React.useState(false);
  const [isSortState, setIsSortState] = React.useState(true);

  const closeForm = () => {
    setIsOpenForm(false);
  };
  return (
    <React.Fragment>
      <Navbar
        title="Teacher"
        valueSearch={searchValueState}
        handleSearch={setSearchActiveState}
      />
      <Container>
        <div className="td-listing__functions d-flex justify-content-end">
          <button
            className="td-listing__functions__add"
            onClick={() => {
              setIsOpenForm(true);
            }}
          >
            + Add
          </button>
          <div
            className="td-listing__functions__sort d-flex justify-content-center align-items-center"
            onClick={() => setIsSortState(!isSortState)}
          >
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.128568 2.26839L2.31563 0.125478C2.48647 -0.0418526 2.7636 -0.0417991 2.93434 0.125478L5.12132 2.26839C5.39667 2.53812 5.20059 3.00001 4.81195 3.00001H3.5V11.5714C3.5 11.8081 3.30414 12 3.0625 12H2.1875C1.94586 12 1.75 11.8081 1.75 11.5714V3.00001H0.437935C0.0485329 3.00001 -0.146209 2.53758 0.128568 2.26839ZM6.5625 1.7143H13.5625C13.8041 1.7143 14 1.52243 14 1.28573V0.428584C14 0.191879 13.8041 1.34454e-05 13.5625 1.34454e-05H6.5625C6.32086 1.34454e-05 6.125 0.191879 6.125 0.428584V1.28573C6.125 1.52243 6.32086 1.7143 6.5625 1.7143ZM6.125 4.71429V3.85715C6.125 3.62045 6.32086 3.42858 6.5625 3.42858H11.8125C12.0541 3.42858 12.25 3.62045 12.25 3.85715V4.71429C12.25 4.951 12.0541 5.14287 11.8125 5.14287H6.5625C6.32086 5.14287 6.125 4.951 6.125 4.71429ZM6.125 11.5714V10.7143C6.125 10.4776 6.32086 10.2857 6.5625 10.2857H8.3125C8.55414 10.2857 8.75 10.4776 8.75 10.7143V11.5714C8.75 11.8081 8.55414 12 8.3125 12H6.5625C6.32086 12 6.125 11.8081 6.125 11.5714ZM6.125 8.14286V7.28572C6.125 7.04901 6.32086 6.85715 6.5625 6.85715H10.0625C10.3041 6.85715 10.5 7.04901 10.5 7.28572V8.14286C10.5 8.37957 10.3041 8.57143 10.0625 8.57143H6.5625C6.32086 8.57143 6.125 8.37957 6.125 8.14286Z"
                fill="#C5C7CD"
              />
            </svg>
            <span>Sort</span>
          </div>
        </div>
        <ListTeachers isSort={isSortState} />
        {isOpenFormAdd && <FormAddTeacher closeForm={closeForm} />}
      </Container>
    </React.Fragment>
  );
}
