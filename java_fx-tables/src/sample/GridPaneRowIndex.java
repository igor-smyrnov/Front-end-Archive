package sample;

/**
 * Created by Igor on 5/5/2017.
 */

import javafx.beans.property.ReadOnlyObjectWrapper;
import javafx.scene.control.TableCell;
import javafx.scene.layout.GridPane;

/**
 * This is a Column that will always display the row number. Regardless of the sorting applied.
 * The solution was taken from: http://stackoverflow.com/a/16407347
 *
 * @author abu
 *
 * @param <T>
 * @param <R>
 */

public class GridPaneRowIndex<R, T> extends GridPane {
    GridPaneRowIndex () {
        super();
    }

}
