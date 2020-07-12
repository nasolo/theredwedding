
const usePagination=(data, itemsPerPage, activeIndex)=>{
    
    let currentPage = 1
    let totalData = data.length
    let currentIndex = activeIndex !== undefined ? activeIndex : (currentPage - 1) * itemsPerPage;
    let totalItems = data !== undefined ? data.length : 0
    let totalPages = Math.ceil(totalData / itemsPerPage);
    let startPage = 0
    let endPage = 0


    if(currentIndex > itemsPerPage){
        currentPage = Math.min(Math.ceil(Math.ceil(currentIndex/itemsPerPage) ,totalPages))
    }

    

    if(currentPage < 1){
        currentPage = Math.max(currentPage, 1)
    }else if(currentPage > totalPages ){
        currentPage = Math.min(currentPage, totalPages )
    }

    if(data === undefined || data === null){
        return null
    }

    function setCurrentPage(page){

        if(!page === undefined){
            return 1
        }
    
     
            return currentPage = page
    }
    
   
    if(totalPages <= itemsPerPage){
        
        startPage = Math.min(totalPages, 1)
        endPage = totalPages

    } else {
        let maxPagesBeforeCurrentPage = Math.floor(totalPages / 2)
        let maxPagesAfterCurrentPage = Math.ceil(totalPages / 2) - 1

        if(currentPage <= maxPagesAfterCurrentPage){
            startPage = Math.min(totalPages, 1)
            endPage = totalPages
        }else if(currentPage + maxPagesAfterCurrentPage >= totalPages){
            startPage = totalPages - totalPages + 1;
            endPage = totalPages;
        }
        else{
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }

    const startIndex = Math.ceil(currentIndex/totalPages)
    const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1)

function currentData(){
   console.log(startIndex, endIndex)
    return data.slice(startIndex, endIndex)
}

function next(){
    return setCurrentPage(Math.min(currentPage + 1, totalPages ))
      
}

function prev(){
    return setCurrentPage(Math.min(currentPage - 1, 1))
}

function jump(page){
    const pageNumber = Math.max(1, page);
    return setCurrentPage(Math.min(pageNumber, totalPages ))
}

return {
    next, 
    prev, 
    currentData, 
    jump, 
    currentPage, 
    totalPages,
    startIndex,
    endIndex,
    startPage,
    endPage

 }

}

export default usePagination