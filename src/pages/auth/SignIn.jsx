import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import lgo from "../../images/seventh-lgo.svg"
import basket from "../../images/basket.svg"
import goal from "../../images/goal.svg"
import learn from "../../images/learn.svg"

import sebi from "../../images/sebi.svg"

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="saventh-auth-page">
      <Container>
        {/* Logo */}
        <div className="saventh-logo">
          <div className="logo-box">
            <span className="logo-text"><img src={lgo} alt="logo-seventh"/></span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="title lato-bold">
          Welcome back to <span>Saventh</span>
        </h1>
        <p className="subtitle">Your personal wealth advisor is waiting.</p>

        {/* Features */}
        <div className="features">
          <div className="feature-item">
            <div className="icon orange"><img src={basket} alt="basket"/></div>
            <div>
              <h4 className="lato-bold">Advisor-curated baskets</h4>
              <p>Your Saventh advisor handpicks funds for your exact goals</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="icon green"><img src={goal} alt="goal"/></div>
            <div>
              <h4 className="lato-bold">Goal-based investing</h4>
              <p>Link every rupee to a real life goal — retirement, home, education</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="icon mint"><img src={sebi} alt="sebi"/></div>
            <div>
              <h4 className="lato-bold">SEBI regulated</h4>
              <p>All investments via BSE Star MF 2.0. Bank-grade security.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="icon purple"><img src={learn} alt="learn"/></div>
            <div>
              <h4 className="lato-bold">Learn & earn</h4>
              <p>Bite-sized financial lessons that make you a smarter investor</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          className="primary-btn"
          onClick={() => navigate("/sign-in-number")}
        >
          Sign In <span className="arrow">➜</span>
        </button>

        {/* Create account */}
        <p className="create-account">
          New to Saventh?{" "}
          <span onClick={() => navigate("/create-account")}>Create account</span>
        </p>

        {/* Footer badges */}
        <div className="footer-badges">
          <div className="badge-item">🛡️ SEBI Registered</div>
          <div className="badge-item">🛡️ BSE Star MF</div>
          <div className="badge-item">🔒 256-bit SSL</div>
        </div>
      </Container>
    </div>
  );
}