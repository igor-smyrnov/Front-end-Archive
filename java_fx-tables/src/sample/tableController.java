package sample;

import java.io.IOException;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.control.Button;
import javafx.scene.layout.VBox;

public class tableController extends VBox {

    public tableController() throws RuntimeException {

        FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource(
                "table.fxml"));
        fxmlLoader.setRoot(this);
        fxmlLoader.setController(this);

        try {
            fxmlLoader.load();
        } catch (IOException exception) {
            throw new RuntimeException(exception);
        }

        init();
    }

    @FXML
    protected void doSomething() {
        System.out.println("ff");
    }

    protected void init () {
        this.getChildren().add(new Button());
    }
}
