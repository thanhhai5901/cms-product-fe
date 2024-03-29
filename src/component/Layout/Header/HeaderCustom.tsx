import { Avatar, Menu } from "antd";
import { SpaceStyle, TextStyle } from "component/common/commonStyle";
import { createSearchParams, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { DropDownStyle, FrameCreate, HeaderCustomStyle, InfoStyle, SearchButtonStyle } from "./headerCustomStyle";
import { useEffect } from 'react';
import { sendGet } from "axios/fetch";
import { useDispatch, useSelector } from "react-redux";
import { storeSetUserInfo } from "store/auth";
import { ESortBy } from "pages/home/Home";


const renderLogo = (navigate: any) => {

  return (
    <svg onClick={() => navigate('/home')} width="110" height="36" viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_442_2)" filter="url(#filter0_d_442_2)">
        <path d="M32.1801 19.0599C31.1348 19.0017 30.1187 18.6934 29.2173 18.1609C28.3159 17.6285 27.5555 16.8874 27.0001 15.9999C27.6701 10.6599 29.6201 8.99994 32.2001 8.99994C34.7801 8.99994 36.7401 10.9999 36.7401 13.9999C36.7401 16.9999 34.7401 18.9999 32.2001 18.9999M32.2001 5.65994C30.3793 5.58616 28.5906 6.15465 27.1465 7.26604C25.7025 8.37743 24.6949 9.961 24.3001 11.7399C23.4441 9.94652 22.7965 8.06087 22.3701 6.11994H16.0001V14.0199C16.0001 16.8899 14.7001 19.0199 12.1501 19.0199C9.60008 19.0199 8.15008 16.8999 8.15008 14.0199V6.11994H4.49008V14.0199C4.40702 16.2091 5.16158 18.3476 6.60008 19.9999C7.30222 20.7644 8.15993 21.3697 9.11552 21.7751C10.0711 22.1804 11.1024 22.3764 12.1401 22.3499C16.5501 22.3499 19.6401 18.9599 19.6401 14.1099V8.76994C20.389 11.6434 21.6271 14.3666 23.3001 16.8199L21.3401 27.9999H25.0601L26.3501 20.0799C26.7771 20.4476 27.2318 20.7819 27.7101 21.0799C28.9528 21.8648 30.3812 22.3065 31.8501 22.3599H32.1901C33.2827 22.3713 34.3664 22.1615 35.3758 21.743C36.3853 21.3246 37.2996 20.7063 38.0638 19.9253C38.828 19.1442 39.4263 18.2167 39.8227 17.1984C40.219 16.1801 40.4052 15.0921 40.3701 13.9999C40.3956 12.9118 40.2021 11.8297 39.801 10.8178C39.4 9.80594 38.7996 8.88503 38.0356 8.10982C37.2716 7.33461 36.3595 6.72091 35.3536 6.3052C34.3477 5.88949 33.2685 5.68026 32.1801 5.68994" fill="#14A800" />
        <path d="M84.8 7.85995V6.17995H81.2V21.81H84.85V15.69C84.85 11.92 85.19 9.20995 90.25 9.55995V5.99995C87.89 5.81995 86.05 6.30995 84.8 7.86995" fill="#14A800" />
        <path d="M59.51 6.17004L56.87 17.11L54.05 6.17004H49.41L46.59 17.11L43.95 6.17004H40.26L44.31 21.82H48.69L51.73 10.71L54.74 21.82H59.12L63.4 6.17004H59.51Z" fill="#14A800" />
        <path d="M71.4201 19.07C68.8301 19.07 66.8901 17.02 66.8901 14.07C66.8901 11.12 68.8901 9.06997 71.4201 9.06997C73.9501 9.06997 76.0001 11 76.0001 14C76.0001 17 74.0001 19 71.4601 19M71.4601 5.64997C70.3658 5.63458 69.2798 5.84111 68.2675 6.25709C67.2552 6.67306 66.3377 7.28985 65.5705 8.07023C64.8032 8.8506 64.202 9.77838 63.8032 10.7975C63.4044 11.8167 63.2162 12.9061 63.2501 14C63.2117 15.0976 63.3948 16.1917 63.7883 17.217C64.1818 18.2424 64.7778 19.178 65.5407 19.9681C66.3037 20.7581 67.2179 21.3865 68.2288 21.8156C69.2398 22.2448 70.3268 22.4659 71.4251 22.4659C72.5234 22.4659 73.6104 22.2448 74.6214 21.8156C75.6324 21.3865 76.5466 20.7581 77.3095 19.9681C78.0724 19.178 78.6684 18.2424 79.0619 17.217C79.4555 16.1917 79.6385 15.0976 79.6001 14C79.627 12.9123 79.4347 11.8304 79.0348 10.8186C78.6349 9.80676 78.0355 8.88576 77.2723 8.1104C76.509 7.33504 75.5976 6.72117 74.5922 6.30535C73.5868 5.88953 72.5081 5.68025 71.4201 5.68997" fill="#14A800" />
        <path d="M95.4701 14.13H96.3101L101.4 21.82H105.51L99.6601 13.29C101.067 12.7098 102.269 11.7237 103.114 10.4574C103.958 9.19104 104.406 7.70193 104.4 6.18H100.77C100.77 9.55 98.1101 10.83 95.4701 10.83V0H91.8201V21.82H95.4601L95.4701 14.13Z" fill="#14A800" />
      </g>
      <defs>
        <filter id="filter0_d_442_2" x="0" y="0" width="110" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_442_2" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_442_2" result="shape" />
        </filter>
        <clipPath id="clip0_442_2">
          <rect width="102" height="28" fill="white" transform="translate(4)" />
        </clipPath>
      </defs>
    </svg>

  )
}


const useNavigateSearch = () => {
  const navigate = useNavigate();
  return (pathname: any, params?: any) =>
    navigate({ pathname, search: `?${createSearchParams(params)}` });
};

const HeaderCustom = () => {
  const navigateQuery = useNavigateSearch();
  const location = useLocation();
  const [searchParams] = useSearchParams();


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: any) => state?.auth);


  const getUserInfo = async () => {
    const result = await sendGet('user');
    if (result?.data) {
      dispatch(storeSetUserInfo(result?.data))
    }
  };

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <TextStyle onClick={() => navigate('/profile')} color="#ccc">Trang cá nhân</TextStyle>
          ),
        },
        {
          key: '2',
          label: (
            <TextStyle onClick={() => {
              localStorage.removeItem('token');
              navigate('/login')
            }} color="#ccc">Đăng xuất</TextStyle>
          ),
        },
      ]}
    />
  );

  const searchProduct = (e: any) => {
    if (e?.keyCode === 13) {
      if (location.pathname.includes('home')) {
        const newParam = {
          categoryId: searchParams.get('categoryId') || undefined,
          page: searchParams.get('page') || 1,
          pageSize: searchParams.get('pageSize') || 16,
          sortBy: searchParams.get('sortBy') || ESortBy.NEW,
          name: e?.target?.value,
        };
        navigateQuery('/home', newParam);
        return;
      }
      navigateQuery('/home', { name: e?.target?.value });
    }
  }


  return (
    <HeaderCustomStyle>

      {/* <TextStyle color="black" onClick={() => navigate('/home')} style={{ cursor: 'pointer' }} fontWeight="600">CMS Product</TextStyle> */}
      {renderLogo(navigate)}

      <SpaceStyle padding="16px" />

      <SearchButtonStyle placeholder="Nhập tên sản phẩm..." onKeyUp={searchProduct} />

      <SpaceStyle padding="16px" />

      <FrameCreate>
        <TextStyle color="rgb(20, 168, 0)" fontSize="12px" onClick={() => navigate('/create')} hoverCursor="pointer" >Đăng sản phẩm</TextStyle>
      </FrameCreate>



      <SpaceStyle padding="5px" />
      <DropDownStyle overlay={menu}>

        <InfoStyle>
          <Avatar src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-1/268933528_3230415287283952_7689793821260481141_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=t7hoY1liHTUAX8g1gkp&_nc_ht=scontent.fhan15-2.fna&oh=00_AT-DsDy0O_-YA_15JBHEs6tZMMcoGQBAPHPTTFc0wb484Q&oe=6357521E" />
          {/* <TextStyle>{userInfo?.username}</TextStyle> */}
        </InfoStyle>

      </DropDownStyle>


    </HeaderCustomStyle>
  )
}

export default HeaderCustom;