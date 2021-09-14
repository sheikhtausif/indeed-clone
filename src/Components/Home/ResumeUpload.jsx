import styled from "styled-components";

const Bottom = styled.div`
  background-color: #f3f2f1 !important;
  text-align: center;
  div {
  }
  @media (min-width: 62em) {
    padding: 1rem !important;
    display: block !important;
  }
  p {
    color: #2d2d2d !important;
    font-size: 1.125rem;
    letter-spacing: -0.06px;
    font-weight: 700;
    line-height: 1.34;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    display: block !important;
  }
  button {
    background-color: #2557a7;
    border: 0.0625rem solid transparent !important;
    color: #fff !important;
    box-shadow: none !important;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 8px;
    padding: 0.5rem 1.5rem;

    font-size: 0.875rem;
    letter-spacing: 0;
    font-weight: 700;

    line-height: 1.5rem;
  }
  button:hover {
    background: rgb(22, 64, 129) !important;
  }
`;

export function ResumeUpload() {
    return (
        <>
            <Bottom>
                <div>
                    <p>Let employers find you</p>
                    <button>Upload your resume</button>
                </div>
            </Bottom>
        </>
    );
}
