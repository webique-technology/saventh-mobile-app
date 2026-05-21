import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArrowRight, LogIn, ShieldCheck, Shield, Lock } from "lucide-react";
import "./Welcome.scss";
import { PrimaryBtn, SecondaryBtn } from "../../components/common/AppButton";

import logo from "../../asstes/images/saventh-logo.png"
import goal from "../../asstes/images/goal-icon.svg"
import book from "../../asstes/images/learn-icon.svg"
import basket from "../../asstes/images/vector.svg"
import shield from "../../asstes/images/sebi-icon.svg"

export default function Welcome() {
  const navigate = useNavigate();

  const stats = [
    { value: "100+", label: "Companies" },
    { value: "5L", label: "Employees" },
    { value: "81%", label: "First-time investors" },
  ];

  const features = [
    {
      iconBg: basket,
      title: "Advisor-curated baskets",
      desc: "Expert-picked funds for your exact goals",
      bgColor: "linear-gradient(90deg, #FFB200 0%, #FF9100 100%)"
    },
    {
      iconBg: goal,
      title: "Goal-based investing",
      desc: "Every rupee mapped to a life goal",
      bgColor: "linear-gradient(90deg, #097F5D 0%, #00C186 100%)"
    },
    {
      iconBg: book,
      title: "Learn & earn",
      desc: "Bite-sized lessons, real XP rewards",
      bgColor: "linear-gradient(90deg, #8E84FF 0%, #B67DFF 100%)"
    },
    {
      iconBg: shield,
      title: "SEBI regulated",
      desc: "Bank-grade security, full compliance",
      bgColor: "linear-gradient(90deg, #00D7B1 0%, #00DD81 100%)"
    },
  ];

  return (
    <div className="welcome-page">
      <div className="welcome-container border rounded-4 d-flex flex-column align-items-start justify-content-center">
        <div className="app-logo">
          <img src={logo} alt="" />
        </div>

        <h1 className="main-title fw-bold">
          Wealth creation,
          <br />
          <span className="primary-color">simplified.</span>
        </h1>

        <p className="text-para primary-text-color">
          Your employer's financial wellness partner. <br />
          Expert advisors + smart technology, built for India's workforce.
        </p>
        <Container className="p-0">
          <Row className="stats-row g-3">
            {stats.map((s, i) => (
              <Col xs={4} key={i}>
                <div className="stat-card">
                  <div className="text-para fw-bold">{s.value}</div>
                  <div className="text-xs">{s.label}</div>
                </div>
              </Col>
            ))}
          </Row>

          <Row className="features-row g-3 mt-3">
            {features.map((f, i) => (
              <Col xs={6} key={i}>
                <Card className="feature-card">
                  <Card.Body>
                    <div className={`feature-icon`} style={{ background: f.bgColor }}>
                      <img src={f.iconBg} alt={f.title} />
                    </div>
                    <div className="fw-bold text-sm mb-1">{f.title}</div>
                    <div className="text-xs primary-color">{f.desc}</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="btn-area d-flex flex-column mt-3 gap-3">
            <PrimaryBtn
              className=""
              onClick={() => navigate("/create-account")}
              text={"Create Account"}
              arrowRight={true}
            />

            <SecondaryBtn
              className=""
              onClick={() => navigate("/sign-in")}
              text={"Sign In"}
              icon={<LogIn size={18} />}
            />
          </div>

          <div className="trust-row mt-3 d-flex align-items-center justify-content-center">
            <span className="text-xs primary-color border-end px-3 d-flex align-items-center gap-1">
              <ShieldCheck size={10}/>
              SEBI Registered
            </span>
            <span className="text-xs primary-color border-end px-3 d-flex align-items-center gap-1">
              <Shield size={10}/>
              BSE Star MF
            </span>
            <span className="text-xs primary-color px-3 d-flex align-items-center gap-1">
              <Lock size={10}/>
              256-bit SSL
            </span>
          </div>
        </Container>
      </div>
    </div>
  );
}