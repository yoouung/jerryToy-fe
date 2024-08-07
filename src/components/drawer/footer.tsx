import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { FooterStyle } from './styles';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterStyle>
      <div onClick={() => navigate('/makePost')}>
        <DriveFileRenameOutlineOutlinedIcon />
      </div>
    </FooterStyle>
  );
};

export default Footer;
