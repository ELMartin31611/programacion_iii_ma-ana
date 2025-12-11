import AccessWithLimit from './useState/AccessWithLimit';
import DocumentTitleChanger from './useState/DocumentTitleChanger';
import HoverFont from './useState/HoverFont';
import LoginWithLimit from './useState/LoginWithLimit';
import PostLikes from './useState/PostLikes';
import CheckboxSummary from './useState/CheckboxSummary';
import LanguageSwitcher from './useState/LanguageSwitcher';
import MultiSwitch from './useState/MultiSwitch';

function App() {

  return (
    <>
  
      <HoverFont/>
      <AccessWithLimit/>
      <LoginWithLimit/>
      <DocumentTitleChanger/>
      <PostLikes/>
      <CheckboxSummary/>
      <LanguageSwitcher/>
      <MultiSwitch/>
    </>

  ); 
}

export default App;


