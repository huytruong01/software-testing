import styled from "styled-components";
export default styled.tr`
  position: relative;

  .item-listing {
    position: relative;
    &__functions:hover {
      z-index: 5;
    }
    &__functions {
      z-index: 7;
      position: absolute;
      right: 50px;
      background: #ffffff;
      border: 1px solid #cbcbcb;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      &__cancel {
        cursor: pointer;
        svg {
          height: 25px;
          width: 25px;
          float: right;
        }
      }
      &__btn {
        outline: none;
        border: none;
        background: rgb(47, 182, 126);
        border-radius: 8px;
        color: #fff;
        width: 150px;
        height: 35px;
        margin-right: 10px;
        font-size: 18px;
        font-weight: 400;
      }
      .btn--delete {
        margin-top: 10px;
        background: #dc3545;
      }
    }
  }
`;