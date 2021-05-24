import React from 'react';
import styles from "../../pages/faq/styles";

const detailOptions = props =>{
    return(<View style={styles.corpoPerguntas}>
        <Text style={styles.title} onPress={props.toggleStatus}>
          {props.question}
        </Text>
        <View>
          {props.clicked ? (
            <Text style={styles.answer}>{props.answer}</Text>
          ) : null}
        </View>
      </View>)
}

export default detailOptions();