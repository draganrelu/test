// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fiUhXe8Zsj5ebqGZX94BP2
// Component: EGB_N7nyj8Q18s
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_play_plasmic_levels_start_here.module.css"; // plasmic-import: fiUhXe8Zsj5ebqGZX94BP2/projectcss
import * as sty from "./PlasmicCompletedForecast.module.css"; // plasmic-import: EGB_N7nyj8Q18s/css

export const PlasmicCompletedForecast__VariantProps = new Array("variants");

export const PlasmicCompletedForecast__ArgProps = new Array("children");

function PlasmicCompletedForecast__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={hasVariant(variants, "variants", "tableRow") ? true : false}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__variants_tableRow]: hasVariant(
          variants,
          "variants",
          "tableRow"
        )
      })}
    >
      <div
        className={classNames(defaultcss.all, sty.box__dEBmk, {
          [sty.box__variants_tableRow__dEBmkRLhTl]: hasVariant(
            variants,
            "variants",
            "tableRow"
          )
        })}
      >
        <p.PlasmicSlot
          defaultContents={"Wednesday"}
          value={args.children}
          className={classNames(sty.slotChildren, {
            [sty.slotChildren__variants_tableRow]: hasVariant(
              variants,
              "variants",
              "tableRow"
            )
          })}
        />
      </div>

      <img
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(defaultcss.img, sty.img, {
          [sty.img__variants_tableRow]: hasVariant(
            variants,
            "variants",
            "tableRow"
          )
        })}
        role={"img"}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__mGq3T, {
          [sty.box__variants_tableRow__mGq3TrLhTl]: hasVariant(
            variants,
            "variants",
            "tableRow"
          )
        })}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__muEzN,
            {
              [sty.box__variants_tableRow__muEzNrLhTl]: hasVariant(
                variants,
                "variants",
                "tableRow"
              )
            }
          )}
        >
          {"68??"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box___7MxVg,
            {
              [sty.box__variants_tableRow___7MxVgRLhTl]: hasVariant(
                variants,
                "variants",
                "tableRow"
              )
            }
          )}
        >
          {"36??"}
        </div>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__r2Nki, {
          [sty.box__variants_tableRow__r2NkiRLhTl]: hasVariant(
            variants,
            "variants",
            "tableRow"
          )
        })}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box___5T5Y1,
            {
              [sty.box__variants_tableRow___5T5Y1RLhTl]: hasVariant(
                variants,
                "variants",
                "tableRow"
              )
            }
          )}
        >
          {"Pollen"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__tsqgb,
            {
              [sty.box__variants_tableRow__tsqgbrLhTl]: hasVariant(
                variants,
                "variants",
                "tableRow"
              )
            }
          )}
        >
          {"35"}
        </div>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCompletedForecast__ArgProps,
      internalVariantPropNames: PlasmicCompletedForecast__VariantProps
    });

    return PlasmicCompletedForecast__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompletedForecast";
  } else {
    func.displayName = `PlasmicCompletedForecast.${nodeName}`;
  }
  return func;
}

export const PlasmicCompletedForecast = Object.assign(
  // Top-level PlasmicCompletedForecast renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicCompletedForecast
    internalVariantProps: PlasmicCompletedForecast__VariantProps,
    internalArgProps: PlasmicCompletedForecast__ArgProps
  }
);

export default PlasmicCompletedForecast;
/* prettier-ignore-end */
