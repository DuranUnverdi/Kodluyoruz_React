import HeaderComp from "./Header";
import AlertComp from "./Alert";
import CoronaComp from "./Corona";
import ContagionComp from "./Contagion";
import SymptompsComp from "./Symptomps";
import ShouldComp from "./Should";
import QuestionComp from "./Question";
import FooterComp from "./Footer";
import AllPageComp from "./AllPage";

export const Header = ({ links }) => <HeaderComp links={links} />;
export const Alert = ({ links }) => <AlertComp links={links} />;
export const Corona = ({ links }) => <CoronaComp links={links} />;
export const Contagion = ({ links }) => <ContagionComp links={links} />;
export const Symptomps = ({ links }) => <SymptompsComp links={links} />;
export const Should = ({ links }) => <ShouldComp links={links} />;
export const Question = () => <QuestionComp />;
export const Footer = () => <FooterComp />;
export const AllPage = ({ links }) => <AllPageComp links={links} />;
