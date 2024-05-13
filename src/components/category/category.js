import { useNavigate } from 'react-router-dom';
import {CategoryContainer, CategoryBodyContainer,Title,ShopNow, BgImg} from './category.styles';

const Category = ({category}) => {
    const {imageUrl, title, size} = category;
    const navigate = useNavigate();

    const navigateToCategory = () => {
        navigate(`/shop/${title}`);
    }
    return (
            <CategoryContainer className={size} onClick={navigateToCategory}>
                <BgImg imageurl={imageUrl}/>
                <CategoryBodyContainer>
                <Title>{title.toUpperCase()}</Title>
                <ShopNow>SHOP NOW</ShopNow>
                </CategoryBodyContainer>
            </CategoryContainer>
    );
}


export default Category;