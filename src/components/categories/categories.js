import Category from '../category/category';
import {CategoriesContainer} from './categories.styles';


const Categories = ({categories}) => (
    <CategoriesContainer>
        {
          categories.map((category) => (
             <Category key={category.id} category={category}/>
            )
          )
        }
      </CategoriesContainer>
);


export default Categories;