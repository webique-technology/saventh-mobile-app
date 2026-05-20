import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArrowRight, LogIn } from "lucide-react";
import "./Welcome.scss";

export default function Welcome() {
  const navigate = useNavigate();

  const stats = [
    { value: "100+", label: "Companies" },
    { value: "5L", label: "Employees" },
    { value: "81%", label: "First-time investors" },
  ];

  const features = [
    {
      iconBg: "orange",
      title: "Advisor-curated baskets",
      desc: "Expert-picked funds for your exact goals",
    },
    {
      iconBg: "green",
      title: "Goal-based investing",
      desc: "Every rupee mapped to a life goal",
    },
    {
      iconBg: "purple",
      title: "Learn & earn",
      desc: "Bite-sized lessons, real XP rewards",
    },
    {
      iconBg: "teal",
      title: "SEBI regulated",
      desc: "Bank-grade security, full compliance",
    },
  ];

  return (
    <div className="welcome-page">
      <div className="welcome-container border rounded-4 d-flex flex-column align-items-start justify-content-center">
        <div className="app-logo">
          <div className="logo-box">
            <div className="logo-mark">△▽</div>
          </div>
        </div>

        <h1 className="welcome-title">
          Wealth creation,
          <br />
          <span>simplified.</span>
        </h1>

        <p className="welcome-subtitle">
          Your employer's financial wellness partner. <br />
          Expert advisors + smart technology, built for India's workforce.
        </p>
        <Container>
          <Row className="stats-row g-3">
            {stats.map((s, i) => (
              <Col xs={4} key={i}>
                <div className="stat-card">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </Col>
            ))}
          </Row>

          <Row className="features-row g-3 mt-3">
            {features.map((f, i) => (
              <Col xs={6} key={i}>
                <Card className="feature-card">
                  <Card.Body>
                    <div className={`feature-icon ${f.iconBg}`}></div>
                    <div className="feature-title">{f.title}</div>
                    <div className="feature-desc">{f.desc}</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="btn-area">
            <Button
              className="btn-create"
              onClick={() => navigate("/create-account")}
            >
              Create Account <ArrowRight size={18} />
            </Button>

            <Button
              variant="outline-success"
              className="btn-signin"
              onClick={() => navigate("/sign-in")}
            >
              Sign In <LogIn size={18} />
            </Button>
          </div>

          <div className="trust-row">
            <span>🛡 SEBI Registered</span>
            <span>🛡 BSE Star MF</span>
            <span>🔒 256-bit SSL</span>
          </div>
        </Container>
      </div>
    </div>
  );
}