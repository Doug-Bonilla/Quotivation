import React from "react";
import QuoteCard from "./Quotecard";
import CategoryForm from "./CategoryForm";

const Quotes = ({ filteredQuotes, quotes, categories, category, handleCategoryChange, }) => {
    return (
        <section className='all-quotes'>
            <div className='quotes-wrapper'>
                <div className='category-header'>
                    <p> Browse through your collection of quotes </p>
                    <CategoryForm categories={categories} category={category} handleCategoryChange={handleCategoryChange} />

                    {filteredQuotes.map((quote) => (
                        <QuoteCard key={quote.id} quote={quote} />
                    ))}
                </div>
            </div>
        </section>
    );

};





export default Quotes;