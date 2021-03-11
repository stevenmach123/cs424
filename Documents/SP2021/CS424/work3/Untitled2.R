## Only run examples in interactive R sessions
library(dplyr)
library(shiny)


  ui <- fluidPage(
    p("The first checkbox group controls the second"),
    checkboxGroupInput("inCheckboxGroup", "Input checkbox",
                       c("Item A", "Item B", "Item C")),select=c("Item A"),
    checkboxGroupInput("inCheckboxGroup2", "Input checkbox 2",
                       c("Item A", "Item B", "Item C")),
    textOutput("s")
    ,  sliderInput("format", "Custom Format:",
                   min = 0, max = 200,
                   value = 0, step = 1,
                   pre = "kHw", sep = ",",
                   animate = TRUE),
    textOutput("s2"),
    textOutput("s3")
  )
  af <-function(){
     print("af-") 
   
  }
  server <- function(input, output, session) {
    output$s<-renderText({
      updateCheckboxGroupInput(session, "inCheckboxGroup2",selected ="Item C")
      c <-"hjjjkkkkk"
      c
    })
    
    output$s2 <- renderText({
      # print(sa)
       a <-input$format
       sa <<- a
       #updateSliderInput(session,"format",value= 50)
       
       #print("---d")
      "x"
    })
    
  
    st = "Item A"
    sa = 100
    output$s3 <-renderText({
       
        #print(paste("h",x))
       #return(sa)
      
      print("--")
      print(st)
      x= 1
      if(x ==2){
        x <-input$format
        print(paste("in x"))
      }
      
      st_diff  <<-paste(input$inCheckboxGroup, collapse = ",") 
      if(st != st_diff){
        st <<-st_diff
        print("st")
        
        updateSliderInput(session,"format",value= va)
        isolate(af())
        #a()
      
     
      return("test")
      }
      
      
      
    })
    va = 50
    a <-reactive({
      updateSliderInput(session,"format",value= va)
      va <<-va+1
      print("as")
    })
    observe({
      x <- input$inCheckboxGroup
      
      # Can use character(0) to remove all choices
      if (is.null(x))
        x <- character(0)
      
      # Can also set the label and select items
      updateCheckboxGroupInput(session, "inCheckboxGroup2",
                               label = paste("Checkboxgroup label", length(x)),
                               
                               selected = x
      )
    })
  }
  
  shinyApp(ui, server)


