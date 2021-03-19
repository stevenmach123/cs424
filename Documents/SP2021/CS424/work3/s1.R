library(shiny)
ui <- fluidPage(
  checkboxGroupInput("icons", "Choose icons:",
                     choiceNames =
                       list(icon("calendar"), icon("bed"),
                            icon("cog"), icon("bug")),
                     choiceValues =
                       list("calendar", "bed", "cog", "bug")
  ),
  textOutput("txt")
)

server <- function(input, output, session) {
  output$txt <- renderText({
    icons <- paste(input$icons, collapse = ",")
    sapply(icons,class)
    paste("You chose", icons)
  })
}

shinyApp(ui, server)
