package utils;

import android.content.Context;
import android.text.Editable;
import android.text.InputType;
import android.text.TextUtils;
import android.text.TextWatcher;
import android.util.AttributeSet;
import android.widget.EditText;

/**
 * Created by niudong on 2017/8/10.
 * Tel：18811793194
 * VersionChange：5.4
 * 作用：
 */

public class MoneyEditText extends EditText {
    private static final String TAG = "MoneyEditText";
    private boolean textChange;

    public MoneyEditText(Context context) {
        this(context, null);
    }

    public MoneyEditText(Context context, AttributeSet attrs) {
        this(context, attrs, 0);
    }

    public MoneyEditText(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        //设置可以输入小数
        setInputType(InputType.TYPE_CLASS_NUMBER | InputType.TYPE_NUMBER_FLAG_DECIMAL);
        setFocusable(true);
        setFocusableInTouchMode(true);
        //监听文字变化
        addTextChangedListener(new TextWatcher() {

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {

            }

            @Override
            public void beforeTextChanged(CharSequence s, int start, int count,
                                          int after) {

            }

            @Override
            public void afterTextChanged(Editable s) {
                if (!textChange) {
                    restrictText();
                }
                textChange = false;
            }
        });
    }


    /**
     * 将小数限制为2位
     */
    private void restrictText() {
        String input = getText().toString();
        if (TextUtils.isEmpty(input)) {
            return;
        }
        if (input.contains(".")) {
            int pointIndex = input.indexOf(".");//0开始   11   .
            int totalLenth = input.length();//当前单独
            int len = (totalLenth - 1) - pointIndex;
            if (len > 2) {
                input = input.substring(0, totalLenth - 1);
                textChange = true;
                setText(input);
                setSelection(input.length());
            }
        } else {//没有点
            if (input.length() > 10) {
                input = input.substring(0, 10);
                textChange = true;
                setText(input);
                setSelection(input.length());
            }

        }

        if (input.toString().trim().substring(0).equals(".")) {
            input = "0" + input;
            setText(input);
            setSelection(2);
        }

    }

    /**
     * 获取金额
     */
    public String getMoneyText() {
        String money = getText().toString();
        //如果最后一位是小数点
        if (money.endsWith(".")) {
            return money.substring(0, money.length() - 1);
        }
        return money;
    }
}
