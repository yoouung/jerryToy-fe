import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { FooterStyle } from './styles';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterStyle>
      <div
        onClick={() => {
          alert('로그아웃되었습니다.');
          navigate('/login');
        }}
      >
        <ExitToAppOutlinedIcon style={{ color: 'var(--logout-color)' }} />
      </div>
      <div onClick={() => navigate('/makePost')}>
        <DriveFileRenameOutlineOutlinedIcon />
      </div>
    </FooterStyle>
  );
};

export default Footer;
